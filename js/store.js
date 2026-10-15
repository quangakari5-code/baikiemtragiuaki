// Lop du lieu nho:ghi du lieu vao localStorage cua trinh duyet
(function () {
  const storageKey = "smartshelf-midterm-v1";
  let memoryData = null;

  function loadData() {
    if (memoryData) return memoryData;
    try {
      const saved = localStorage.getItem(storageKey);
      memoryData = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(window.SS_DATA));
    } catch (error) {
      console.warn("Khong doc duoc localStorage; dung du lieu mau trong bo nho.", error);
      memoryData = JSON.parse(JSON.stringify(window.SS_DATA));
    }
    return memoryData;
  }

  function saveData() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(memoryData));
    } catch (error) {
      console.warn("Trinh duyet khong cho phep luu localStorage.", error);
    }
  }

  window.SS_Store = {
    all(collectionName) {
      const list = loadData()[collectionName];
      return Array.isArray(list) ? list : [];
    },
    find(collectionName, predicate) {
      return this.all(collectionName).find(predicate);
    },
    insert(collectionName, item) {
      const data = loadData();
      if (!Array.isArray(data[collectionName])) data[collectionName] = [];
      data[collectionName].unshift(item);
      saveData();
      return item;
    },
    reset() {
      memoryData = JSON.parse(JSON.stringify(window.SS_DATA));
      saveData();
    }
  };
})();
