function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

// https://stackoverflow.com/a/5624139
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + ((+r) << 16) + ((+g) << 8) + (+b)).toString(16).slice(1);
}

mp.Player.prototype.setCrewTag = function(tag, { crewIsPrivate = false, crewIsRockstar = false, playerCrewRank = 5, crewTagColor = [0, 0, 0] } = {}) {
    if (!tag || tag.length === 0) {
        this.setVariable("__playerListTag", null);
        return;
    }

    this.setVariable("__playerListTag", `${crewIsPrivate ? '(' : '%'}${crewIsRockstar ? '*' : '%'}${clamp(playerCrewRank, 0, 5)}${tag}${rgbToHex(crewTagColor[0], crewTagColor[1], crewTagColor[2])}`);
};

mp.Player.prototype.resetCrewTag = function() {
    this.setVariable("__playerListTag", null);
};