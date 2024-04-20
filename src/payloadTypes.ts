/**
 * This file contains the types for Payload.
 *
 * @file payloadTypes.ts
 * @author Luca Liguori
 * @date 2023-12-29
 * @version 1.0.0
 *
 * Copyright 2023, 2024 Luca Liguori.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. *
 */

export type PayloadValue = string | number | boolean | bigint | object | undefined;

export type Payload = {
  [key: string]: PayloadValue; // This allows any string as a key, and the value can be PayloadValue.
};
