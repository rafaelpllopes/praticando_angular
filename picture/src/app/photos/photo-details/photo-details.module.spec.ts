import { PhotoDetailsModule } from './photo-details.module';

describe('PhotoDetailsModule', () => {
  let photoDetailsModule: PhotoDetailsModule;

  beforeEach(() => {
    photoDetailsModule = new PhotoDetailsModule();
  });

  it('should create an instance', () => {
    expect(photoDetailsModule).toBeTruthy();
  });
});
