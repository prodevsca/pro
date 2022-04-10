/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ComponentGallery {
    }
    interface ErrorBoundry {
    }
    interface ProButton {
        "styles": { [key: string]: string };
    }
    interface ProCard {
        "imgSrc": string;
    }
    interface ProCarousel {
    }
    interface ProImg {
        "height": number;
        "src": string;
        "width": number;
    }
    interface ProSkeleton {
    }
}
declare global {
    interface HTMLComponentGalleryElement extends Components.ComponentGallery, HTMLStencilElement {
    }
    var HTMLComponentGalleryElement: {
        prototype: HTMLComponentGalleryElement;
        new (): HTMLComponentGalleryElement;
    };
    interface HTMLErrorBoundryElement extends Components.ErrorBoundry, HTMLStencilElement {
    }
    var HTMLErrorBoundryElement: {
        prototype: HTMLErrorBoundryElement;
        new (): HTMLErrorBoundryElement;
    };
    interface HTMLProButtonElement extends Components.ProButton, HTMLStencilElement {
    }
    var HTMLProButtonElement: {
        prototype: HTMLProButtonElement;
        new (): HTMLProButtonElement;
    };
    interface HTMLProCardElement extends Components.ProCard, HTMLStencilElement {
    }
    var HTMLProCardElement: {
        prototype: HTMLProCardElement;
        new (): HTMLProCardElement;
    };
    interface HTMLProCarouselElement extends Components.ProCarousel, HTMLStencilElement {
    }
    var HTMLProCarouselElement: {
        prototype: HTMLProCarouselElement;
        new (): HTMLProCarouselElement;
    };
    interface HTMLProImgElement extends Components.ProImg, HTMLStencilElement {
    }
    var HTMLProImgElement: {
        prototype: HTMLProImgElement;
        new (): HTMLProImgElement;
    };
    interface HTMLProSkeletonElement extends Components.ProSkeleton, HTMLStencilElement {
    }
    var HTMLProSkeletonElement: {
        prototype: HTMLProSkeletonElement;
        new (): HTMLProSkeletonElement;
    };
    interface HTMLElementTagNameMap {
        "component-gallery": HTMLComponentGalleryElement;
        "error-boundry": HTMLErrorBoundryElement;
        "pro-button": HTMLProButtonElement;
        "pro-card": HTMLProCardElement;
        "pro-carousel": HTMLProCarouselElement;
        "pro-img": HTMLProImgElement;
        "pro-skeleton": HTMLProSkeletonElement;
    }
}
declare namespace LocalJSX {
    interface ComponentGallery {
    }
    interface ErrorBoundry {
    }
    interface ProButton {
        "styles"?: { [key: string]: string };
    }
    interface ProCard {
        "imgSrc"?: string;
    }
    interface ProCarousel {
    }
    interface ProImg {
        "height"?: number;
        "src"?: string;
        "width"?: number;
    }
    interface ProSkeleton {
    }
    interface IntrinsicElements {
        "component-gallery": ComponentGallery;
        "error-boundry": ErrorBoundry;
        "pro-button": ProButton;
        "pro-card": ProCard;
        "pro-carousel": ProCarousel;
        "pro-img": ProImg;
        "pro-skeleton": ProSkeleton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "component-gallery": LocalJSX.ComponentGallery & JSXBase.HTMLAttributes<HTMLComponentGalleryElement>;
            "error-boundry": LocalJSX.ErrorBoundry & JSXBase.HTMLAttributes<HTMLErrorBoundryElement>;
            "pro-button": LocalJSX.ProButton & JSXBase.HTMLAttributes<HTMLProButtonElement>;
            "pro-card": LocalJSX.ProCard & JSXBase.HTMLAttributes<HTMLProCardElement>;
            "pro-carousel": LocalJSX.ProCarousel & JSXBase.HTMLAttributes<HTMLProCarouselElement>;
            "pro-img": LocalJSX.ProImg & JSXBase.HTMLAttributes<HTMLProImgElement>;
            "pro-skeleton": LocalJSX.ProSkeleton & JSXBase.HTMLAttributes<HTMLProSkeletonElement>;
        }
    }
}
