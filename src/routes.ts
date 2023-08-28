import { Layout } from "layout";
import { paths } from "lib/constants";
import { lazy } from "react";

const routes = [
  {
    route: "*",
    component: Layout,
    routes: [
      {
        path: paths.Landing,
        exact: true,
        component: lazy(() => import("pages/home/Home")),
      },
      {
        path: paths.about,
        component: lazy(() => import("pages/about/AboutPage")),
      },
      {
        path: paths.contact,
        component: lazy(() => import("pages/contact/ContactPage")),
      },
      {
        path: paths.gallery,
        component: lazy(() => import("pages/gallery/GalleryPage")),
      },
      {
        path: paths.donation,
        component: lazy(() => import("pages/donation/DonationPage")),
      },
      {
        path: paths.ourpartner,
        component: lazy(() => import("pages/ourpartner/OurPartnerPage")),
      },
      {
        path: paths.helpcentre,
        component: lazy(() => import("pages/helpcentre/HelpCentrePage")),
      },
      {
        path: paths.causedetails,
        component: lazy(
          () => import("pages/causes/components/causedetails/CauseDetailsPage")
        ),
      },
      {
        path: paths.blogdetails,
        component: lazy(() => import("pages/blog/blogdetails/BlogDetailsPage")),
      },
      {
        path: paths.login,
        component: lazy(() => import("pages/auth/components/login/LoginPage")),
      },
      {
        path: paths.partnerdetail,
        component: lazy(
          () =>
            import(
              "pages/ourpartner/components/partnersdetails/PartnerDetailPage"
            )
        ),
      },
      {
        path: paths.signup,
        component: lazy(() => import("pages/auth/components/signup/SignupPage")),
      },
      {
        path: paths.forgotpassword,
        component: lazy(
          () => import("pages/auth/components/forgotpassword/ForgotPasswordPage")
        ),
      },
      {
        path: paths.volunteer,
        component: lazy(() => import("pages/volunteer/VolunteerPage")),
      },
      {
        path: paths.causes,
        component: lazy(() => import("pages/causes/CausesPage")),
      },
      {
        path: paths.changepassword,
        component: lazy(() => import("pages/auth/components/changepassword/ChangePasswordPage")),
      },
    ],
  },
];

export default routes;
