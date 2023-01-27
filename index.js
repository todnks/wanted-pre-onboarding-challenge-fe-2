/**
 * Represents a todoItem
 * @constructor
 * @param {Object} todoList - The data about todoList
 * @param {number} id - The id of the todoList
 * @param {string} content - The content of the todoList
 * @param {boolean} complete - The complete of the todoList
 * @param {string} category - The category of the todoList
 * @param {string[]} tags - The tags of the todoList
 */
function todoList(todoList) {}

/**
 * 할일 추가 함수
 * @param {Object} data 할 일 정보
 * @param {string} data.content 할 일 내용
 * @param {boolean} data.complete 할 일 완료여부
 * @param {string} data.category 할 일 카테고리
 * @param {string[]} data.tags 할 일 태그들
 */
function create(data) {}

/**
 * 할일 목록 전체를 가져오는 함수
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
 * @param {Object} data
 * @param {number} data.id
 * @param {string} data.content
 * @param {boolean} data.completed
 * @param {string} data.category
 * @param {string[]} data.tags
 */
function UPDATE(todoData) {}
/**
 * 모든 할 일 삭제하는 함수
 * @param {Object} todoData
 */
function deleteAll() {}
/**
 * 할 일을 삭제하는 함수
 * @param {Object} todoData
 * @param {number} todoData.id
 */
function deleteId() {}
