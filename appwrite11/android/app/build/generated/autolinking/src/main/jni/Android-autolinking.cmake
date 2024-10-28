# This code was generated by [React Native](https://www.npmjs.com/package/@react-native/gradle-plugin)
cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

# We set REACTNATIVE_MERGED_SO so libraries/apps can selectively decide to depend on either libreactnative.so
# or link against a old prefab target (this is needed for React Native 0.76 on).
set(REACTNATIVE_MERGED_SO true)


add_subdirectory(/home/abdul/Desktop/React Native Projects/appwrite11/node_modules/react-native-safe-area-context/android/src/main/jni/ safeareacontext_autolinked_build)
add_subdirectory(/home/abdul/Desktop/React Native Projects/appwrite11/node_modules/react-native-screens/android/src/main/jni/ rnscreens_autolinked_build)

add_subdirectory(/home/abdul/Desktop/React Native Projects/appwrite11/node_modules/react-native-vector-icons/android/build/generated/source/codegen/jni/ RNVectorIconsSpec_autolinked_build)

set(AUTOLINKED_LIBRARIES
  
  react_codegen_safeareacontext
  react_codegen_rnscreens
  
  react_codegen_RNVectorIconsSpec
)