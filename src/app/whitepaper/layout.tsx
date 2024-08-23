import { PropsWithChildren } from "react";

export interface SideNavItem {
  _id?: string;
  title: string;
  href?: string;
  items: SideNavItem[];
}

const sideNavConfig: SideNavItem[] = [
  {
    title: "About the project",
    items: [
      {
        title: "Our History",
        href: "/whitepaper/about-the-project/our-history",
        items: [],
      },
      {
        title: "Our Values",
        href: "/whitepaper/about-the-project/our-values",
        items: [],
      },
    ],
  },
  {
    title: "Introdction",

    items: [
      { title: "First Steps", href: "/whitepaper/firststeps", items: [] },
    ],
  },
];

const WhitePaperIndex = ({ children }: PropsWithChildren) => {
  //importar componente do e-comerce de sidebar
  return (
    <div className="flex">
      <ul className="h-[100vh] bg-black">
        {sideNavConfig.map((wp) => (
          <li className="bg-blue-500" key={wp.title}>
            <a>{wp.title}</a>
            {wp.items.map((item) => {
              return (
                <ul className="bg-red-500" key={item.title}>
                  <li>
                    <a href={item.href}>{item.title}</a>
                  </li>
                  {item.items.map((item) => {
                    return (
                      <ul key={item.title}>
                        <li>
                          <a href={item.href}>{item.title}</a>
                        </li>
                      </ul>
                    );
                  })}
                </ul>
              );
            })}
          </li>
        ))}
      </ul>
      <div>
        <div className="flex w-full justify-between bg-yellow-500">
          <h1>tituloi</h1>
          <>SEARCH BAR TOPZERA</>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default WhitePaperIndex;
