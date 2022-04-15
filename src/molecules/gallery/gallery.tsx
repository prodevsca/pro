/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, h, State, Watch, Fragment } from '@stencil/core';
import { FetchProvider } from '../../utils/fetchprovider';
import { loadTranslation, translation } from '../../utils/localization';
@Component({
  tag: 'component-gallery',
  styleUrl: 'gallery.scss',
  shadow: false,
})
export class ComponentGallery {
  @State() title;
  @Watch('title')
  watchStateHandler(newValue: boolean, oldValue: boolean) {
    console.log('Old value of title is: ', oldValue);
    console.log('The new value of title is: ', newValue[0]?.title);
    performance.mark('end');
    performance.measure('measure', 'start', 'end');
    console.log('Time to hydrate', performance.getEntriesByType('measure'));
  }
  connectedCallback() {
    performance.mark('start');
  }

  async componentWillLoad() {
    this.title = (await new FetchProvider().get()) as string;
    await loadTranslation('en-us');
  }
  render() {
    return (
      <Fragment>
        <pro-seo seoTitle={translation.gallery.seoTitle} seoDescription={translation.gallery.seoDescription}></pro-seo>
        {/* <div>Hello, World! I'm {this.getText()}</div> */}
        {/* <pro-button>{this.open ? "On" : "Off"}</pro-button> */}
        {/* <pro-button styles={{['color']:'black', ['background']:'white'}}>Hello</pro-button> */}
        <h1>Hello {this.title ? this.title['0']?.title : ''}!</h1>
        {[...(Array(15) as Array<HTMLElement>)].map(() => (<pro-carousel></pro-carousel>) as HTMLElement)}
      </Fragment>
    ) as HTMLElement;
  }
}
