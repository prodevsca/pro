import { Component, h, Prop } from '@stencil/core';
@Component({
  tag: 'component-gallery',
  styleUrl: 'gallery.scss',
  shadow: false,
})
export class ComponentGallery {
  @Prop() imgSrc: string;
  render() {
    return (
      <error-boundry>
        {/* <div>Hello, World! I'm {this.getText()}</div> */}
        {/* <pro-button>{this.open ? "On" : "Off"}</pro-button> */}
        {/* <pro-button styles={{['color']:'black', ['background']:'white'}}>Hello</pro-button> */}

        {[...(Array(40) as Array<HTMLElement>)].map(() => (<pro-carousel></pro-carousel>) as HTMLElement)}
      </error-boundry>
    ) as HTMLElement;
  }
}
