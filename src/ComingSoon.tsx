import { TypeAnimation } from "react-type-animation";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useState } from "react";
import Emoji from "./Emoji";

const ComingSoon = () => {
  const [style, setStyle] = useState<"default" | "emoji">("default");

// hover:bg-indigo-400 focus:z-10 focus:shadow-[0_0_0_2px]  
  // data-[state=on]:bg-indigo-200 
  //   data-[state=on]:text-white-100
  // first:rounded-l-lg last:rounded-r-lg

  const toggleGroupItemClasses =
	`flex items-center justify-center leading-4 p-2 
    text-sm rounded-md
    inline-flex items-center justify-center font-medium 
    transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
    disabled:pointer-events-none disabled:opacity-50 
    data-[state=on]:bg-slate-100 
    border border-input 
    bg-transparent shadow-sm hover:bg-slate-100 
    hover:text-accent-foreground`;

  const toggleOptions = [
    { value: "default", label: "Default", ariaLabel: "Toggle default" },
    { value: "emoji", label: "Emoji Style", ariaLabel: "Toggle emoji" },
  ]
  return (
    <>
      <div
        className="flex flex-col gap-8 items-center justify-items-center
      md:w-4/5 lg:w-3/6 pb-20 sm:p-16"
      >
        <h1 className="text-3xl text-center">
          <TypeAnimation
            sequence={[
              "emojp",
              200,
              "emoji past ",
              250,
              "emoji pasta archive project",
              300,
              // show emoji at the end: https://www.npmjs.com/package/grapheme-splitter
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
          />
        </h1>
        <ToggleGroup.Root
          type="single"
          className="inline-flex space-x-px rounded gap-1"
          defaultValue={style}
          value={style}
          onValueChange={(value) => {
            if (value) setStyle(value as "default" | "emoji");
          }}
        >
          {toggleOptions.map(({ value, ariaLabel, label }) => <ToggleGroup.Item className={toggleGroupItemClasses} value={value} aria-label={ariaLabel}>
            {label}
          </ToggleGroup.Item>)
        }
        </ToggleGroup.Root>
        <div className="imessage">
          {style === "emoji" ? (
            <>
              <p className="from-me">
                The <Emoji symbol="0x1F60A" /> emoji <Emoji symbol="0x1F60A" />{" "}
                pasta <Emoji symbol="0x1F35D" /> archive project is a{" "}
                <Emoji symbol="0x1F46F" /> crowd-sourced{" "}
                <Emoji symbol="0x1F46F" /> collection of pastas{" "}
                <Emoji symbol="0x1F35D" /> <Emoji symbol="0x1F35D" />{" "}
                <Emoji symbol="0x1F35D" /> shared by the{" "}
                <Emoji symbol="0x1F4AF" /> community. We aim{" "}
                <Emoji symbol="0x1F3AF" /> to celebrate{" "}
                <Emoji symbol="0x1F37E" /> and archive{" "}
                <Emoji symbol="0x1F4BE" /> the creativity{" "}
                <Emoji symbol="0x1F308" /> and brilliance{" "}
                <Emoji symbol="0x1F4A1" /> behind <Emoji symbol="0x1F351" /> our
                most beloved <Emoji symbol="0x1FAE6" /> CUM
                <Emoji symbol="0x1F4A6" />
                -munication method <Emoji symbol="0x1F445" />.
              </p>
              <p className="from-me">Full website and database coming soon!</p>
            </>
          ) : (
            <>
              <p className="from-them">
                The emoji pasta archive project is a crowd-sourced collection of
                emoji pastas shared by the community. We aim to celebrate and
                archive the creativity and brilliance behind our most beloved
                communication method.
              </p>
              <p className="from-them">
                Full website and database coming soon!
              </p>
            </>
          )}
        </div>
      </div>
      <footer className="text-sm text-gray-500 max-w-4/5 mx-6">
        This project is self-funded and maintained by The Green Couch group.
      </footer>
    </>
  );
};

export default ComingSoon;