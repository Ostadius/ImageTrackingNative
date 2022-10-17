/* eslint-disable prettier/prettier */


import React, {
  useState,
  FunctionComponent,
  useEffect,
  useCallback,
} from 'react';
import {ViewProps, Button, View} from 'react-native';
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



const XRView: FunctionComponent<ViewProps> = (props: ViewProps) => {


  const engine = useEngine();
  const [toggleView, setToggleView] = useState(false);
  const [xrSession, setXrSession] = useState<WebXRSessionManager>();
  const [camera, setCamera] = useState<Camera>();

  useEffect(() => {
    if (engine) {
      const scene = new Scene(engine);
      setScene(scene);
      scene.createDefaultCamera(true);
      (scene.activeCamera as ArcRotateCamera).beta -= Math.PI / 8;
      setCamera(scene.activeCamera!);
      scene.createDefaultLight(true);
      const rootNode = new TransformNode('Root Container', scene);
      setRootNode(rootNode);

      const deviceSourceManager = new DeviceSourceManager(engine);
       const handlePointerInput = (event: IMouseEvent) => {
         if (event.inputIndex === PointerInput.Move && event.movementX) {
           rootNode.rotate(Vector3.Down(), event.movementX * 0.005);
        };
      };

      deviceSourceManager.onDeviceConnectedObservable.add(device => {
        if (device.deviceType === DeviceType.Touch) {
           const touch = deviceSourceManager.getDeviceSource(device.deviceType, device.deviceSlot)!;
          touch.onInputChangedObservable.add(touchEvent => {
             handlePointerInput(touchEvent);
          });
        } else if (device.deviceType === DeviceType.Mouse) {
           const mouse = deviceSourceManager.getDeviceSource(device.deviceType, device.deviceSlot)!;
          mouse.onInputChangedObservable.add(mouseEvent => {
            if (mouse.getInput(PointerInput.LeftClick)) {
               handlePointerInput(mouseEvent);
            }
          });
        }
      });

      const transformContainer = new TransformNode('Transform Container', scene);
      transformContainer.parent = rootNode;
      transformContainer.scaling.scaleInPlace(0.2);
      transformContainer.position.y -= .2;

      scene.beforeRender = function () {
        transformContainer.rotate(Vector3.Up(), 0.005 * scene.getAnimationRatio());
      };

      SceneLoader.ImportMeshAsync('', 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF-Binary/BoxAnimated.glb').then(result => {
        const mesh = result.meshes[0];
        mesh.parent = transformContainer;
      });
    }
  }, [engine]);
  return (
    <>
      <View>
        <EngineView />
        <Button  onPress={toggleXR} />
      </View>
    </>
  );
};

export default XRView;
