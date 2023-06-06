export interface NavLink {
  name: string;
  route: string;
}
export class NavigationService {
  public static links: NavLink[] = [
    {
      name: "Link 1",
      route: "#",
    },
    {
      name: "Link 2",
      route: "#",
    },
    {
      name: "Link 3",
      route: "#",
    },
  ];
}
