(() => {
    window.pdf2txtStrings = {
        errorBoundary: {
            title: 'エラーが発生しました。',
            reload: '再読み込み'
        },
        fileRow: {
            needsPassword: 'パスワードが必要',
            unlocked: '解除済み',
            downloadMarkdown: 'Markdownをダウンロード',
            downloadTxt: 'TXTをダウンロード',
            unlockQueued: 'ロック解除済み。お待ちください。',
            unlock: '解除する',
            enterPassword: 'パスワードを入力',
            cancelProcessing: '処理をキャンセル',
            removeFile: '削除'
        },
        dropzone: {
            addPdfs: 'PDFを追加',
            dropFiles: 'ここにドロップ / クリックで選択',
            tapToBrowse: 'タップして選択',
            maxSize: '最大 1 GB'
        },
        engine: {
            loading: 'PDFエンジンを読み込み中...',
            failedRetry: 'PDFエンジンの読み込みに失敗。5秒後に再試行します...',
            failedLater: 'PDFエンジンの読み込みに失敗。時間をおいて再試行してください。',
            failedRefresh: 'PDFエンジンの読み込みに失敗。ページを再読み込みしてください。',
            loadingTitle: 'PDFエンジンを読み込み中'
        },
        queue: {
            label: 'キュー',
            clearAll: 'すべて削除',
            emptyTitle: 'キューは空です',
            emptySubtitle: 'すべてのファイルはブラウザ内でローカル処理されます'
        },
        actions: {
            downloadZip: 'ZIPをダウンロード',
            convertAll: '一括変換',
            processing: '処理中...',
            zipUnavailable: 'ZIPダウンロード不可 (JSZipが未読み込み)'
        },
        status: {
            queued: '待機中',
            processing: '処理中',
            done: '完了',
            error: 'エラー',
            skipped: 'スキップ'
        },
        errors: {
            fileUnavailableOffline: 'ファイルがオフラインで利用できません (0バイト)',
            fileTooLarge: 'ファイルサイズが1GBを超えています',
            fileNotAvailable: 'ファイルが利用できません。完全にダウンロードされているか確認してください。',
            errorConverting: '変換中にエラーが発生しました',
            unknown: '不明なエラー'
        },
        alerts: {
            zipUnavailable: 'ZIPダウンロードを利用できません。ブラウザを更新して再度変換してください。'
        }
    };
})();
