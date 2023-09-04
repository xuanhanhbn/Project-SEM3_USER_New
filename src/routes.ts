import { Layout } from "layout";
import { paths } from "lib/constants";
import { lazy } from "react";

const routes = [
  {
    route: "*",
    component: Layout,
    routes: [
      {
        name:'landing',
        path: paths.Landing,
        exact: true,
        component: lazy(() => import("pages/home/Home")),
      },
      {
        name:'about',
        path: paths.about,
        component: lazy(() => import("pages/about/AboutPage")),
      },
      {
        name:'contact',
        path: paths.contact,
        component: lazy(() => import("pages/contact/ContactPage")),
      },
      {
        name:'gallery',
        path: paths.gallery,
        component: lazy(() => import("pages/gallery/GalleryPage")),
      },
      {
        name:'donation',
        path: paths.donation,
        component: lazy(() => import("pages/donation/DonationPage")),
      },
      {
        name:'ourpartner',
        path: paths.ourpartner,
        component: lazy(() => import("pages/ourpartner/OurPartnerPage")),
      },
      {
        name:'helpcentre',
        path: paths.helpcentre,
        component: lazy(() => import("pages/helpcentre/HelpCentrePage")),
      },
      {
        name:'causedetails',
        path: paths.causedetails,
        component: lazy(
          () => import("pages/causes/components/causedetails/CauseDetailsPage")
        ),
      },
      {
        name:'blogdetails',
        path: paths.blogdetails,
        component: lazy(() => import("pages/blog/blogdetails/BlogDetailsPage")),
      },
      {
        name:'login',
        path: paths.login,
        component: lazy(() => import("pages/auth/components/login/LoginPage")),
        noAuth:true,

      },
      {
        name:'partnerdetail',
        path: paths.partnerdetail,
        component: lazy(
          () =>
            import(
              "pages/ourpartner/components/partnersdetails/PartnerDetailPage"
            )
        ),
      },
      {
        name:'signup',
        path: paths.signup,
        component: lazy(() => import("pages/auth/components/signup/SignupPage")),
        noAuth:true,
      },
      {
        name:'forgotpassword',
        path: paths.forgotpassword,
        component: lazy(
          () => import("pages/auth/components/forgotpassword/ForgotPasswordPage")
        ),
        noAuth:true,
      },
      {
        name:'volunteer',
        path: paths.volunteer,
        component: lazy(() => import("pages/volunteer/VolunteerPage")),
      },
      {
        name:'causes',
        path: paths.causes,
        component: lazy(() => import("pages/causes/CausesPage")),
      },
      {
        name:'changepassword',
        path: paths.changepassword,
        component: lazy(() => import("pages/auth/components/changepassword/ChangePasswordPage")),
        noAuth:true,
      },
      {
        name:'activeCode',

        path: paths.activeCode,
        component: lazy(() => import("pages/auth/components/forgotpassword/components/ActiveCode/ActiveCode")),
        noAuth:true,
      },
      {
        name:'resetPassword',
        path: paths.resetPassword,
        component: lazy(() => import("pages/auth/components/forgotpassword/components/ConfirmPassword/ChangePassword")),
        noAuth:true,
      },
      {
        name:'resetSuccess',
        path: paths.resetSuccess,
        component: lazy(() => import("pages/auth/components/forgotpassword/components/Success/ResetPasswordSuccess")),
        noAuth:true,
      },
    ],
  },
];

export default routes;
