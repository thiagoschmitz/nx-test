module.exports = {
  name: 'esp-tahoe',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/esp-tahoe',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
