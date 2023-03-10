/**
 * 할일 목록 데이터
 * @typedef {Object} todoList - The data about todoList
 * @property {number} id - 할 일 고유번호
 * @property {string} content - 할 일 내용
 * @property {boolean} complete - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]} tags - 할 일 태그
 */

/**
 * 할일 추가 함수
 * @constructor
 * @param {Object} data 할 일 정보
 * @param {string} data.content 할 일 내용
 * @param {boolean} data.complete 할 일 완료여부
 * @param {string} data.category 할 일 카테고리
 * @param {string[]} data.tags 할 일 태그들
 * @return {boolean}
 */
function create(data) {}

/**
 * 할일 목록 전체를 가져오는 함수
 * @constructor
 * @return {todoList[]}
 */
function getAll(id) {}

/**
 * 할일 목록 중 특정 하나 가져오는함수
 * @param {number} id
 * @return {todoList}
 */
function getId() {}
/**
 * 할일 수정 함수
 * @constructor
 * @param {Object} data
 * @param {number} data.id
 * @param {string} data.content
 * @param {boolean} data.completed
 * @param {string} data.category
 * @param {string[]} data.tags
 * @return {boolean}
 */
function UPDATE(todoData) {}
/**
 * 모든 할 일 삭제하는 함수
 * @param {Object} todoData
 * @return {boolean}
 */
function deleteAll() {}
/**
 * 할 일을 삭제하는 함수
 * @constructor
 * @param {Object} todoData
 * @param {number} todoData.id
 * @return {boolean}
 */
function deleteId() {}
