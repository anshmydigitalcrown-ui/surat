# PowerShell script to add icons to location page hero sections

$locations = @(
    @{name="katargam"; color="amber"; icon1="🏭"; icon2="💎"; icon3="⭐"},
    @{name="sagrampura"; color="teal"; icon1="🕌"; icon2="💎"; icon3="✨"},
    @{name="mota-varachha"; color="rose"; icon1="🏙️"; icon2="💎"; icon3="🌟"},
    @{name="magdalla"; color="indigo"; icon1="🏖️"; icon2="💎"; icon3="⭐"},
    @{name="dumas-road"; color="cyan"; icon1="🌊"; icon2="💎"; icon3="🌟"},
    @{name="someshwara"; color="emerald"; icon1="🛕"; icon2="💎"; icon3="✨"},
    @{name="kamrej"; color="fuchsia"; icon1="🌾"; icon2="💎"; icon3="⭐"},
    @{name="bhatar"; color="orange"; icon1="📚"; icon2="💎"; icon3="🌟"},
    @{name="pandesara"; color="blue"; icon1="🏭"; icon2="💎"; icon3="⭐"},
    @{name="new-civil-hospital-road"; color="purple"; icon1="🏥"; icon2="💎"; icon3="✨"},
    @{name="varachha"; color="red"; icon1="🏢"; icon2="💎"; icon3="⭐"},
    @{name="adajan"; color="blue"; icon1="🏘️"; icon2="💎"; icon3="🌟"},
    @{name="vesu"; color="green"; icon1="🏡"; icon2="💎"; icon3="✨"},
    @{name="citylight"; color="purple"; icon1="🌃"; icon2="💎"; icon3="⭐"},
    @{name="althan"; color="pink"; icon1="🏙️"; icon2="💎"; icon3="🌟"},
    @{name="piplod"; color="indigo"; icon1="🏬"; icon2="💎"; icon3="⭐"},
    @{name="udhna"; color="orange"; icon1="🏭"; icon2="💎"; icon3="✨"},
    @{name="athwa"; color="teal"; icon1="🏘️"; icon2="💎"; icon3="⭐"},
    @{name="rander"; color="yellow"; icon1="🚉"; icon2="💎"; icon3="🌟"},
    @{name="ghod-dod-road"; color="rose"; icon1="🛣️"; icon2="💎"; icon3="✨"},
    @{name="ring-road"; color="cyan"; icon1="🛣️"; icon2="💎"; icon3="⭐"},
    @{name="nanpura"; color="violet"; icon1="🏛️"; icon2="💎"; icon3="🌟"}
)

foreach ($loc in $locations) {
    $filePath = "D:\surat\src\app\locations\$($loc.name)\page.tsx"
    
    if (-not (Test-Path $filePath)) {
        Write-Host "File not found: $filePath" -ForegroundColor Red
        continue
    }
    
    $content = Get-Content $filePath -Raw
    
    # Check if icons already added
    if ($content -match "Service Icons") {
        Write-Host "Icons already exist in $($loc.name), skipping..." -ForegroundColor Yellow
        continue
    }
    
    # Determine color variations for gradients
    $color1 = "$($loc.color)-400"
    $color2 = switch ($loc.color) {
        "amber" { "orange-500" }
        "teal" { "cyan-500" }
        "rose" { "pink-500" }
        "indigo" { "purple-500" }
        "cyan" { "blue-500" }
        "emerald" { "green-500" }
        "fuchsia" { "pink-500" }
        "orange" { "red-500" }
        "blue" { "indigo-500" }
        "purple" { "violet-500" }
        "red" { "pink-500" }
        "green" { "emerald-500" }
        "pink" { "rose-500" }
        "yellow" { "amber-500" }
        "violet" { "purple-500" }
        default { "$($loc.color)-500" }
    }
    $color3 = "$($loc.color)-600"
    
    # Create icon section
    $iconSection = @"
          {/* Service Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-$color1 to-$color2 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-3xl">$($loc.icon1)</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-$color2 to-$color1 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>
              <span className="text-3xl">$($loc.icon2)</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-$color1 to-$color3 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
              <span className="text-3xl">$($loc.icon3)</span>
            </div>
          </div>
"@
    
    # Find and replace - look for the h1 tag in hero section
    $pattern = '(\s+)<h1 className="text-'
    $replacement = "$iconSection`n`$1<h1 className=`"text-"
    
    $newContent = $content -replace $pattern, $replacement, 1
    
    if ($newContent -ne $content) {
        Set-Content -Path $filePath -Value $newContent -NoNewline
        Write-Host "Added icons to $($loc.name)" -ForegroundColor Green
    } else {
        Write-Host "Pattern not matched in $($loc.name)" -ForegroundColor Yellow
    }
}

Write-Host "`nCompleted adding icons to all location pages!" -ForegroundColor Cyan
