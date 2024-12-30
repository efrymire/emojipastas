"use client";

import Emoji from "@/components/emoji";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [style, setStyle] = useState("default");
  return (
    <>
      <div
        className="flex flex-col gap-8 items-center justify-items-center
      md:w-4/5 lg:w-3/6 p-8 pb-20 sm:p-20 font-[family-name:var(--font-inter)]"
      >
        <h1 className="text-3xl text-center">
          <TypeAnimation
            sequence={[
              "emojp",
              200,
              "emoji past ",
              250,
              "emoji pasta archive project",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
          />
        </h1>
        <ToggleGroup
          variant="outline"
          type="single"
          defaultValue={style}
          value={style}
          onValueChange={(value) => {
            if (value) setStyle(value);
          }}
        >
          <ToggleGroupItem value="default" aria-label="Toggle default">
            Default
          </ToggleGroupItem>
          <ToggleGroupItem value="emoji" aria-label="Toggle emoji">
            Emoji Style
          </ToggleGroupItem>
        </ToggleGroup>
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
}
