import { environment } from 'src/environments/environment';

export default {
  login: `${environment.api_url}/users/login`,
  signup: `${environment.api_url}/users`,
  update: `${environment.api_url}/user`,
  articles: `${environment.api_url}/articles`,
  profiles: `${environment.api_url}/profiles`,
};
