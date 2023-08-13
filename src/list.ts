export type List = {
  title: string;
  subItems?: List[];
};

const list: List = {
  title: "Desenvolvimento",
  subItems: [
    {
      title: "Frontend",
      subItems: [
        {
          title: "Javascript",
          subItems: [
            { title: "NextJs", subItems: [{ title: "ReactJs" }] },
            { title: "NuxtJs", subItems: [{ title: "VueJs" }] },
          ],
        },
        {
          title: "CSS",
          subItems: [
            { title: "TailwindCSS" },
            { title: "SAAS" },
            { title: "LESS" },
          ],
        },
      ],
    },

    {
      title: "Backend",
      subItems: [
        {
          title: "Javascript",
          subItems: [
            {
              title: "NodeJs",
              subItems: [{ title: "NestJs" }, { title: "ExpressJs" }],
            },
          ],
        },
      ],
    },
  ],
};

export default list;
