(() => {
    window.pdf2txtStrings = {
        errorBoundary: {
            title: 'Something went wrong.',
            reload: 'Reload Page'
        },
        fileRow: {
            needsPassword: 'needs password',
            unlocked: 'unlocked',
            downloadMarkdown: 'Download Markdown',
            downloadTxt: 'Download TXT',
            unlockQueued: 'Unlocked. Please wait.',
            unlock: 'Unlock',
            enterPassword: 'Enter password',
            cancelProcessing: 'Cancel Processing',
            removeFile: 'Remove File'
        },
        dropzone: {
            addPdfs: 'Add PDFs',
            dropFiles: 'Drop files here or click to browse',
            tapToBrowse: 'Tap to browse files',
            maxSize: 'Max 1 GB'
        },
        engine: {
            loading: 'PDF engine loading...',
            failedRetry: "PDF engine didn't load. Retrying in 5s...",
            failedLater: "PDF engine didn't load. Try again later.",
            failedRefresh: "PDF engine didn't load. Please refresh.",
            loadingTitle: 'PDF engine is loading'
        },
        queue: {
            label: 'Queue',
            clearAll: 'Clear All',
            emptyTitle: 'Queue is empty',
            emptySubtitle: 'All files are processed locally in your browser.'
        },
        actions: {
            downloadZip: 'Download Zip',
            convertAll: 'Convert All',
            processing: 'Processing...',
            zipUnavailable: 'Zip download unavailable (JSZip not loaded yet)'
        },
        status: {
            queued: 'queued',
            processing: 'processing',
            done: 'done',
            error: 'error',
            skipped: 'skipped'
        },
        errors: {
            fileUnavailableOffline: 'File not available offline (0 bytes)',
            fileTooLarge: 'File over 1 GB',
            fileNotAvailable: 'File not available. Please make sure it is fully downloaded.',
            errorConverting: 'Error converting file',
            unknown: 'Unknown error'
        },
        alerts: {
            zipUnavailable: 'Zip download unavailable. Please refresh the browser and convert again.'
        }
    };
})();
