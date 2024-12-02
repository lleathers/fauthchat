/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styles from './LayoutContainer.module.css';
import { MainGrid, append } from '../../components/Grid';

export function LayoutContainer(props) {
  const { children, appendClass } = props;
  return (
    <div class={styles.container}>
      <div class={append(styles.layoutContainer, appendClass)}>
        {children}
      </div>
    </div>
  )
}

export function MainContainer(props) {
  const { children, center } = props;
  return (
    <LayoutContainer>
      <MainGrid center={center}>
        {children}
      </MainGrid>
    </LayoutContainer>
  )
}
