/* eslint-disable prettier/prettier */


import React, {
  useState,
  FunctionComponent,
  useEffect,
  useCallback,
} from 'react';

import {
  Scene,
  Vector3,
  ArcRotateCamera,
  Camera,
  WebXRSessionManager,
  SceneLoader,
  TransformNode,
  DeviceSourceManager,
  DeviceType,
  PointerInput,
  WebXRTrackingState,
  IMouseEvent,
} from '@babylonjs/core';

import '@babylonjs/loaders';

import {
  EngineView,
  useEngine,
  EngineViewCallbacks,
} from '@babylonjs/react-native';

import {ViewProps, SafeAreaView, StatusBar, Button, View} from 'react-native';

const XRView: FunctionComponent<ViewProps> = (props: ViewProps) => {
  const engine = useEngine();
  const [toggleView, setToggleView] = useState(false);
  const [xrSession, setXrSession] = useState<WebXRSessionManager>();
  const [camera, setCamera] = useState<Camera>();

  return (
    <>
      <View>
        <EngineView />
        <Button />
      </View>
    </>
  );
};

export default XRView;
