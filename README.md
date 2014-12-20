# Summary #

This is a sample PhoneGap web application demonstrating reading and writing
NFC chips with a phone.

The WTFPL license applies to all parts not specifically licensed otherwise.

The client directory contains the mobile PhoneGap client application.
The server directory contains the JavaEE server.

## Client ##

This sample project was bootstrapped by using the following commands:

phonegap create Web-NFC fi.neter.Web-NFC Web-NFC

mv Web-NFC client

cd client

phonegap platform add android

phonegap plugin add https://github.com/chariotsolutions/phonegap-nfc.git

## Server ##

The server application is a simple Spring WAR for Tomcat for serving the PhoneGap application and
for providing the backend side for receiving and sending NFC tag content.

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

## Client ##

You can build the apk file in the client directory with the command:

phonegap build

The built client application will reside in:

client/platforms/android/ant-build/CordovaApp-debug.apk

Copy that to your Android mobile device with NFC support and install it.

# Notes #

When developing web NFC applications, you should make sure that the connection
between the client and the server is secure, and that the client cannot connect
to arbitrary web sites through PhoneGap whitelisting or other similar security
methods and also TLS. Otherwise an arbitrary man-in-the-middle can read and
write your NFC chips (remotely) and cause trouble.
