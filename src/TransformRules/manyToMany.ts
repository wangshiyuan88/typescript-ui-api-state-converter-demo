import KeyPath from '../KeyPath';
import {TransformRule} from '../fromUiToApiTransformers/TransformRule';

export default function manyToMany<UiState, ApiState>({uiKeys, apiKeys}: { uiKeys: KeyPath<UiState>[], apiKeys: KeyPath<ApiState>[] }):
  TransformRule<UiState, ApiState> {
  return {
    uiToApi: () => {
    },
    apiToUi: () => {
    }
  }
};
