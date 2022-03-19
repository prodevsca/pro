import { TestWindow } from '@stencil/core/testing';
import { Button } from './button';

describe('button', () => {
  it('should build', () => {
    expect(new Button()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Button],
        html: '<button>' 
          + '</button>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
