import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, rectangle } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
      //      {
      //        type: "basic",
      //        description: "Disable CMD + Tab to force Hyper Key usage",
      //        from: {
      //          key_code: "tab",
      //          modifiers: {
      //            mandatory: ["left_command"],
      //          },
      //        },
      //        to: [
      //          {
      //            key_code: "tab",
      //          },
      //        ],
      //      },
    ],
  },
  ...createHyperSubLayers({
    // spacebar: open(
    //   "raycast://extensions/stellate/mxstbr-commands/create-notion-todo"
    // ),
    // b = "B"rowse
    b: {
      t: open("https://twitter.com"),
    },
    // o = "Open" applications
    i: open("notion://www.notion.so/chtbks/Inbox-9eaa3696de7a48fbba6b5f50a2fc7b91?pvs=4"),
    t: open("notion://www.notion.so/chtbks/15b2745e43d08014a690e84e23e8ac9d?v=15b2745e43d080f183db000cbae56f3b&pvs=4"),
    p: open("notion://www.notion.so/chtbks/Conversion-CX-Project-Board-1532745e43d08094b46ff72c84f8dce1?pvs=4"),
    g: open("notion://www.notion.so/chtbks/Product-Gameplan-27d2745e43d080b7833eced8be373ee4"),
    h: open("notion://www.notion.so/chtbks/Conversion-CX-Team-1002745e43d0800ab8f2f6e7bcb68500?pvs=4"),
    d: open("notion://www.notion.so/chtbks/Conversion-CX-Product-Discovery-1532745e43d08043a524c9c02dde634d?pvs=4"),
    w: open("notion://www.notion.so/chtbks/6e4dc9a01ace451cad708c289e339fa1?v=f6ff26efcbc54a22b7855c62af68b97a&pvs=4"),
    m: open("notion://www.notion.so/chtbks/CBPT-Agendas-1532745e43d080ca941bd377c7d6a624?pvs=4"),
    a: open("raycast://extensions/guga4ka/authy/search-otp"),
    o: {
      1: app("1Password"),
      w: open("notion://www.notion.so/ryneb/Lift-log-6dfbd28f46ed47b1995adfca8bb8ea7f?pvs=4"),
      // a: app("Arc"),
      // c: app("Notion Calendar"),
      // v: app("Visual Studio Code"),
      // s: app("Slack"),
      // e: app("Spark Desktop"),
      // n: app("Notion"),
      // i: app("iTerm"),

      // i: open("notion://www.notion.so/chtbks/Inbox-9eaa3696de7a48fbba6b5f50a2fc7b91?pvs=4"),
      // z: app("zoom.us"),
      // m: app("Messages"),
      // f: app("Finder"),
      // y: app("Spotify"),
    },
    // // f = "Finder" / "Folder"
    f: {
      d: open("raycast://extensions/timothy_boye/open-folders/downloads"),
      s: open("raycast://extensions/timothy_boye/open-folders/desktop"),
      c: open("raycast://extensions/timothy_boye/open-folders/documents"),
      g: open("raycast://extensions/timothy_boye/open-folders/projects"), //opens github folder

    },

    // // w = "Window" via rectangle.app
    // w: {
    //   semicolon: {
    //     description: "Window: Hide",
    //     to: [
    //       {
    //         key_code: "h",
    //         modifiers: ["right_command"],
    //       },
    //     ],
    //   },
    //   y: rectangle("previous-display"),
    //   o: rectangle("next-display"),
    //   k: rectangle("top-half"),
    //   j: rectangle("bottom-half"),
    //   h: rectangle("left-half"),
    //   l: rectangle("right-half"),
    //   f: rectangle("maximize"),
    //   u: {
    //     description: "Window: Previous Tab",
    //     to: [
    //       {
    //         key_code: "tab",
    //         modifiers: ["right_control", "right_shift"],
    //       },
    //     ],
    //   },
    //   i: {
    //     description: "Window: Next Tab",
    //     to: [
    //       {
    //         key_code: "tab",
    //         modifiers: ["right_control"],
    //       },
    //     ],
    //   },
    //   n: {
    //     description: "Window: Next Window",
    //     to: [
    //       {
    //         key_code: "grave_accent_and_tilde",
    //         modifiers: ["right_command"],
    //       },
    //     ],
    //   },
    //   b: {
    //     description: "Window: Back",
    //     to: [
    //       {
    //         key_code: "open_bracket",
    //         modifiers: ["right_command"],
    //       },
    //     ],
    //   },
    //   // Note: No literal connection. Both f and n are already taken.
    //   m: {
    //     description: "Window: Forward",
    //     to: [
    //       {
    //         key_code: "close_bracket",
    //         modifiers: ["right_command"],
    //       },
    //     ],
    //   },
    //   d: {
    //     description: "Window: Next display",
    //     to: [
    //       {
    //         key_code: "right_arrow",
    //         modifiers: ["right_control", "right_option", "right_command"],
    //       },
    //     ],
    //   },
    // },

    // s = "System"
    s: {
      u: {
        to: [
          {
            key_code: "volume_increment",
          },
        ],
      },
      j: {
        to: [
          {
            key_code: "volume_decrement",
          },
        ],
      },
      i: {
        to: [
          {
            key_code: "display_brightness_increment",
          },
        ],
      },
      k: {
        to: [
          {
            key_code: "display_brightness_decrement",
          },
        ],
      },
      l: {
        to: [
          {
            key_code: "q",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      p: {
        to: [
          {
            key_code: "play_or_pause",
          },
        ],
      },
      semicolon: {
        to: [
          {
            key_code: "fastforward",
          },
        ],
      },
      e: {
        to: [
          {
            // Emoji picker
            key_code: "spacebar",
            modifiers: ["right_control", "right_command"],
          },
        ],
      },
      // Turn on Elgato KeyLight
      // y: {
      //   to: [
      //     {
      //       shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 1, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
      //     },
      //   ],
      // },
      // h: {
      //   to: [
      //     {
      //       shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 0, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
      //     },
      //   ],
      // },
      // "D"o not disturb toggle
      d: open(`raycast://extensions/yakitrak/do-not-disturb/toggle`),
    },

    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    v: {
      h: {
        to: [{ key_code: "left_arrow" }],
      },
      j: {
        to: [{ key_code: "down_arrow" }],
      },
      k: {
        to: [{ key_code: "up_arrow" }],
      },
      l: {
        to: [{ key_code: "right_arrow" }],
      },
      // Magicmove via homerow.app
      m: {
        to: [{ key_code: "f", modifiers: ["right_control"] }],
      },
      // Scroll mode via homerow.app
      s: {
        to: [{ key_code: "j", modifiers: ["right_control"] }],
      },
      d: {
        to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
      },
      u: {
        to: [{ key_code: "page_down" }],
      },
      i: {
        to: [{ key_code: "page_up" }],
      },
    },

    // c = Musi*c* which isn't "m" because we want it to be on the left hand
    c: {
      p: {
        to: [{ key_code: "play_or_pause" }],
      },
      n: {
        to: [{ key_code: "fastforward" }],
      },
      b: {
        to: [{ key_code: "rewind" }],
      },
    },

    // r = "Raycast"
    r: {
      // n: open("raycast://script-commands/dismiss-notifications"),
      // l: open(
      //   "raycast://extensions/stellate/mxstbr-commands/create-mxs-is-shortlink"
      // ),
      e: open(
        "raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"
      ),
      c: open("raycast://extensions/raycast/system/open-camera"),
      p: open("raycast://extensions/raycast/raycast/confetti"),
      a: open("raycast://extensions/raycast/raycast-ai/ai-chat"),
      // s: open("raycast://extensions/peduarte/silent-mention/index"),
      o: open("raycast://extensions/thomas/elgato-key-light/toggle"),
      g: open("raycast://extensions/mblode/google-search/index"),
      d: open("raycast://extensions/raycast/google-workspace/search-google-drive-files"),
      q: open("raycast://extensions/raycast/raycast/search-quicklinks"),
      t: open("raycast://extensions/ThatNerd/timers/manageTimers"),
      n: open("raycast://extensions/MisakiCoca/link-cleaner/main"),
      l: open("raycast://extensions/koinzhang/open-path/open-path"),
      w: open("raycast://extensions/koinzhang/wi-fi/toggle-wi-fi"),
      f: open("raycast://extensions/josephschmitt/gif-search/search"),
      y: open("raycast://extensions/mattisssa/spotify-player/search"),
      // h: open(
      //   "raycast://extensions/raycast/clipboard-history/clipboard-history"
      // ),
      // 1: open(
      //   "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-1"
      // ),
      // 2: open(
      //   "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-2"
      // ),
    },

    // l: {
      
    // }
  }),
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);
