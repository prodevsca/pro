import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'pro-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  @Element() host: HTMLProButtonElement;

  @Prop() styles: { [key: string]: string };

  private handleClick($event: Event) {
    console.log($event.target);
  }

  render() {
    return (
      <error-boundry>
        <div innerHTML={this.host.innerHTML} style={this.styles} onClick={$event => this.handleClick($event)}></div>
      </error-boundry>
    ) as HTMLElement;
  }
}
