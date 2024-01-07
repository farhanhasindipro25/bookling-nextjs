import AuthGuardHOC from "../login/components/AuthGuardHOC";

export default function BooksPageLayout({ children }) {
  return <AuthGuardHOC>{children}</AuthGuardHOC>;
}
