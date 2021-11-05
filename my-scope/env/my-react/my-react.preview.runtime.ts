import { PreviewRuntime } from "@teambit/preview";
import { ReactAspect, ReactPreview } from "@teambit/react";

import { ThemeSwitcher } from "@my-scope/themes.internal.theme-switcher";
import { MyReactAspect } from "./my-react.aspect";

export class MyReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const myReactPreviewMain = new MyReactPreviewMain();
    react.registerProvider([ThemeSwitcher]);

    return myReactPreviewMain;
  }
}

MyReactAspect.addRuntime(MyReactPreviewMain);
