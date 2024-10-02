param (
    [string]$LocalFilePath,
    [string]$RemoteFolderPath
)

scp -r -P 2642 $LocalFilePath bru_site@194.158.193.176:"~/zdarova/frontend/$RemoteFolderPath"