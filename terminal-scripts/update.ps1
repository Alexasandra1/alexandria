# Define the SSH command
$sshCommand = @"
cd ~/zdarova/frontend &&
git fetch --all &&
git checkout master &&
git pull origin master &&
cd ~/zdarova &&
docker compose build frontend &&
docker compose down &&
docker compose up -d
"@

Start-Process -NoNewWindow -Wait -FilePath "ssh" -ArgumentList "-p 2642 bru_site@194.158.193.176 `"$sshCommand`""