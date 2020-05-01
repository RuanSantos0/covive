import axios from "axios";
import toastr from "toastr";
import md5 from "md5";
import conf from "../config";

const baseUrl = "https://covive-api.herokuapp.com";

axios.interceptors.request.use(async config => {
  const authUrl = "/oauth/token";
  if (
    config.method != "get" &&
    config.method != "post" &&
    !config.url.endsWith(authUrl)
  ) {
    const username = `${Date.now()}`;
    const body = new FormData();
    body.set("grant_type", "password");
    body.set("username", username);
    body.set("password", md5(username + conf.salt));
    const resp = await axios.post(baseUrl + authUrl, body, {
      headers: { Authorization: conf.authorization }
    });
    if (resp) {
      config.headers.Authorization = "Bearer " + resp.data.access_token;
    }
  }

  return config;
});

export default class ApiService {
  constructor(serviceName) {
    this.serviceName = serviceName;
    if (serviceName != null && serviceName !== undefined) {
      this.url = baseUrl + this.serviceName + "/";
    } else {
      this.url = baseUrl + "/";
    }
  }

  async getByParams(filter = {}, sub = "", msg = null, msgErro = null) {
    let params = {
      params: filter
    };
    return axios
      .get(this.url + sub, params)
      .then(response => {
        if (msg !== null) {
          toastr.success(msg);
        }
        return response.data;
      })
      .catch(() => {
        if (msgErro !== null) toastr.error(msgErro);
        else toastr.error("Falha, verifique sua conexão!");
      });
  }

  async getById(id, sub = "") {
    let params = {
      params: { id }
    };
    return new Promise((resolve, reject) => {
      axios
        .get(this.url + sub, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err.response);
        });
    });
  }

  async create(newObject = {}, sub = "") {
    return new Promise((resolve, reject) => {
      axios
        .post(this.url + sub, newObject)
        .then(res => {
          toastr.success("Recurso criado com sucesso");
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  async update(newObject, id, sub = "") {
    return new Promise((resolve, reject) => {
      axios
        .put(this.url + sub + "/" + id, newObject)
        .then(res => {
          toastr.success("Recurso atualizado com sucesso!");
          resolve(res.data);
        })
        .catch(err => {
          reject(err.response);
        });
    });
  }

  async delete(id, sub = "") {
    let params = {
      params: { id }
    };
    return new Promise((resolve, reject) => {
      axios
        .delete(this.url + sub, params)
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          toastr.error("falha ao deletar");
          reject(err.response);
        });
    });
  }
}
