import { Collapse } from "antd";
import { AiOutlinePlus } from "react-icons/ai";

export default function ServicesFAQ() {
  const items = [
    {
      label: "01. What all should I carry for my first appointment?",
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      label: "02. How is the Emergency Department staffed?",
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      label: "03. What if my patient does not have a matched sibling? ",
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
  ];

  return (
    <>
      <div className="mt-14 mb-10">
        <h2 className="text-4xl mb-5">Frequently asked questions</h2>
        <p className="text-lg text-[#222222] leading-[32px]">
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          laboris nisi ut aliquip ex ea commodo consequat. fugiat nulla
          pariatur. Nemo enim ipsam voluptatem quia voluptas voluptatem.
        </p>
      </div>

      <div>
        <Collapse
          items={items}
          defaultActiveKey={["0"]}
          className="servicesFAQ"
          expandIcon={({ isActive, panelKey }) => (
            <span className="!text-2xl block">{isActive ? "-" : "+"}</span>
          )}
        />
      </div>
    </>
  );
}
