import { VmessageModule } from './vmessage.module';

describe('VmassegeModule', () => {
  let vmassegeModule: VmessageModule;

  beforeEach(() => {
    vmassegeModule = new VmessageModule();
  });

  it('should create an instance', () => {
    expect(vmassegeModule).toBeTruthy();
  });
});
