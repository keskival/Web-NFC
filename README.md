# Summary #

This is a sample Phonegap web application demonstrating reading and writing
NFC chips with a phone.

This sample project was bootstrapped by using the following command:
phonegap create Web-NFC

Android platform was added by using the command:
phonegap platform add android

The WTFPL license applies to all parts not specifically licensed otherwise.

The client directory contains the mobile Phonegap client application.
The server directory contains the JavaEE server.

# Requirements #

You'll also need Android SDK:
http://developer.android.com/sdk/installing/index.html?pkg=tools

Install the Android SDK to /opt/android-sdk-linux, and chown it to your user:
sudo chown -R YOURUSER /opt/android-sdk-linux
Also add it to path and ANDROID_HOME:
export PATH=$PATH:/opt/android-sdk-linux/utils
export ANDROID_HOME=/opt/android-sdk-linux

Run android command and install Android SDK Build-tools version 19.
Install also the Android 4.4.2 (API 19) packages.

You'll also need ant and maven.

You'll also need Tomcat:
sudo apt-get install tomcat7

You also might like SprintSource STS:
http://spring.io/tools/sts/all

If you want to run the application in an SDK emulator,
create an emulator image first:
android create avd --name emu -t 1 --abi default/x86

# Web NFC Standard #
There is a draft W3C standard for NFC for web applications:
http://www.w3.org/2012/nfc/web-api

This repository contains a test page to test basic Web NFC functionality.
The test page is in:
html/test-web-nfc-standard.html

It has been tested _not_ to work with Android 4.4.3,
mobile Chrome 39.0.2171.93,
mobile Firefox 34.0.

# Build #

You can build the apk file in the client directory with the command:
phonegap build

The built client application will reside in:
platforms/android/ant-build/CordovaApp-debug.apk

Copy that to your Android mobile device with NFC support and install it.

# Notes #

When developing web NFC applications, you should make sure that the connection
between the client and the server is secure, and that the client cannot connect
to arbitrary web sites through Phonegap whitelisting or other similar security
methods and also TLS. Otherwise an arbitrary man-in-the-middle can read and
write your NFC chips (remotely) and cause trouble.
