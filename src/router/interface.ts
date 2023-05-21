export interface Routes {
    root: string;
    profile: string;
    pageNotFound: string;
    
};

export const SwitchRoutes: Routes = {
  root: "/form-and-validations/",
  profile: "/form-and-validations/profile",
  pageNotFound: "/form-and-validations/*",
};