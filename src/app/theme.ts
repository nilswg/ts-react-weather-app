import { DefaultTheme } from "styled-components";

import lightBg from "./bg.svg";
import darkBg from "./darkBg.svg";

// and extend them!
// 參考 : https://styled-components.com/docs/api#create-a-declarations-file
declare module "styled-components" {
  export interface DefaultTheme {
    backgroundImage: string;
    backgroundGradient: string[];
    appTitleColor: string;
    search:{
      bgColor:string,
      input:{
        color:string,
        placeHolderColor:string,
      },
      result:{
        bgColor:string,
        item:{
          color:string,
          hoverBgColor:string,
        }
        seperator:{
          color:string,
        }
      }
    },
    weather:{
      bgColor:string,
      title:string,
      pie:{
        bgColor:string,
      },
      bars:{
        bgColor:string,
      }
    },
    forecast:{
      bgColor:string,
      title:string,
    }
  }
}

export const lightTheme: DefaultTheme = {
  backgroundImage: lightBg,
  backgroundGradient: ["#F9FFFF", "#38C8E6"],
  appTitleColor: "#2F5D8A",

  search:{
    bgColor:"#ffffff",
    input:{
      color:"#727E8E",
      placeHolderColor:"#6898d5",
    },
    result:{
      bgColor:"#ffffff",
      item:{
        color:"#727E8E",
        hoverBgColor:'#f9f9f9',
      },
      seperator:{
        color:'#ccc',
      }
    }
  },
  weather:{
    bgColor:"#ffffff",
    title: "#2F5D8A",
    pie:{
      bgColor:"#ffffff",
    },
    bars:{
      bgColor:"#ffffff",
    }
  },
  forecast:{
    bgColor:"#ffffff",
    title: "#2F5D8A",
  }
};

export const darkTheme: DefaultTheme = {
  backgroundImage: darkBg,
  backgroundGradient: ["#031027", "#02101D"],
  appTitleColor: "#2F5D8A",

  search:{
    bgColor:"#051A33",
    input:{
      color:'#5f8bbf',
      placeHolderColor:'#235A84',
    },
    result:{
      bgColor:'#0f2744',
      item:{
        color:'#5f8bbf',
        hoverBgColor:'#183553',
      },
      seperator:{
        color:'#356097',
      }
    }
  },
  weather:{
    bgColor:"#051A33",
    title: "#2F5D8A",
    pie:{
      bgColor:"#051A33",
    },
    bars:{
      bgColor:"#051A33",
    }
  },
  forecast:{
    bgColor:"#051A33",
    title: "#2F5D8A",
  }
};
