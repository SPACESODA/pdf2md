(() => {
    window.pdf2txtStrings = {
        errorBoundary: {
            title: '發生錯誤。',
            reload: '重新整理'
        },
        fileRow: {
            needsPassword: '需要密碼',
            unlocked: '已解鎖',
            downloadMarkdown: '下載 Markdown',
            downloadTxt: '下載 TXT',
            unlockQueued: '已解鎖，請稍候。',
            unlock: '解鎖',
            enterPassword: '輸入密碼',
            cancelProcessing: '取消處理',
            removeFile: '移除檔案'
        },
        dropzone: {
            addPdfs: '新增 PDF',
            dropFiles: '拖放檔案，或點擊選取',
            tapToBrowse: '點擊選取檔案',
            maxSize: '最大 1 GB'
        },
        engine: {
            loading: 'PDF 引擎載入中...',
            failedRetry: 'PDF 引擎未載入。5 秒後重試...',
            failedLater: 'PDF 引擎未載入。請稍後再試。',
            failedRefresh: 'PDF 引擎未載入。請重新整理頁面。',
            loadingTitle: 'PDF 引擎載入中'
        },
        queue: {
            label: '檔案清單',
            clearAll: '清除全部',
            emptyTitle: '尚未加入檔案',
            emptySubtitle: '所有檔案都只在你的瀏覽器中本機處理'
        },
        actions: {
            downloadZip: '下載 ZIP',
            convertAll: '全部轉換',
            processing: '處理中...',
            zipUnavailable: 'ZIP 下載不可用 (JSZip 尚未載入)'
        },
        status: {
            queued: '待處理',
            processing: '處理中',
            done: '完成',
            error: '錯誤',
            skipped: '已略過'
        },
        errors: {
            fileUnavailableOffline: '檔案無法離線使用 (0 位元組)',
            fileTooLarge: '檔案超過 1 GB',
            fileNotAvailable: '檔案無法使用，請確認已完整下載。',
            errorConverting: '轉換檔案時發生錯誤',
            unknown: '未知錯誤'
        },
        alerts: {
            zipUnavailable: '無法下載 ZIP，請重新整理瀏覽器後再轉換。'
        }
    };
})();
