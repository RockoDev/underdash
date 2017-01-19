/**
 *
 * Copyright 2016 Google Inc. All rights reserved.
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
 * limitations under the License.
 */

it('should zip two arrays', function () {
  expect(f([1, 2, 3], [9, 8, 7])).to.deep.equal([[1,9], [2,8], [3,7]]);
});

it('should zip two arrays of different length', function () {
  expect(f([1, 2, 3, 4], [9, 8, 7])).to.deep.equal([[1,9], [2,8], [3,7]]);
  expect(f([1, 2, 3], [9, 8, 7, 6])).to.deep.equal([[1,9], [2,8], [3,7]]);
});

it('should zip more than two arrays ', function () {
  expect(f([1,2], [3,4], [5,6])).to.deep.equal([[1,3,5], [2,4,6]]);
});