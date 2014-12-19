#!/bin/sh
rm -Rf platforms/android/assets/www
rm -Rf platforms/android/res
rm -Rf platforms/android/CordovaLib/ant-build/
rm -Rf platforms/android/ant-build/
git checkout platforms/android/assets
git checkout platforms/android/res
