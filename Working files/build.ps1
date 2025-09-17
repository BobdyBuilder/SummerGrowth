# build-game.ps1
# Always run relative to this script's location
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptPath

# Define paths relative to script
$tweegoExe   = Join-Path $scriptPath "tweego.exe"
$outputFile  = Join-Path $scriptPath "SummerGrowth.html"
$srcFolder   = Join-Path $scriptPath "src"

# Run Tweego
& $tweegoExe -o $outputFile $srcFolder

# If Tweego succeeded, open the HTML file
if (Test-Path $outputFile) {
    Start-Process $outputFile
} else {
    Write-Host "Build failed — output file not found." -ForegroundColor Red
}