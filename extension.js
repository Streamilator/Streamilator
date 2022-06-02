// Scratchify Extension v1.1
// https://github.com/Scratchify/Scratchify
class ScratchifyExtension {
    constructor (runtime, extensionId) {
		this.icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSIgdmlld0JveD0iMCwwLDQ1LDQ1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE3LjUsLTE1Ny41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMTcuNSwxODBjMCwtMTIuNCAxMC4xLC0yMi41IDIyLjUsLTIyLjVjMTIuNCwwIDIyLjUsMTAuMSAyMi41LDIyLjVjMCwxMi40IC0xMC4xLDIyLjUgLTIyLjUsMjIuNWMtMTIuNCwwIC0yMi41LC0xMC4xIC0yMi41LC0yMi41eiIgZmlsbD0iIzBmYmQ4YyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIzMi4zNDIzNywxODQuMjQ2NjFsMC4xMjA2NywtMTkuMDY2ODJsMTUuOTI5MjQsNi45OTkyMmwtMC4xMjA2Nyw5LjA1MDcxIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjM4Ljg2OTE5LDE4OC4wNDYyNGMwLDMuNzQwNTkgLTMuMDMzNCw2Ljc3Mzk4IC02Ljc3Mzk4LDYuNzczOThjLTMuNzQwNTksMCAtNi43NzI5NywtMy4wMzM0IC02Ljc3Mjk3LC02Ljc3Mzk4YzAsLTMuNzQwNTkgMy4wMzI0LC02Ljc3Mjk3IDYuNzcyOTcsLTYuNzcyOTdjMy43NDA1OSwwIDYuNzczOTgsMy4wMzM0IDYuNzczOTgsNi43NzI5N3oiIGZpbGw9IiNhNmQzODgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNTQuNjc3NzYsMTg1LjYzMjcxYzAsMy43NDA1OSAtMy4wMzM0LDYuNzczOTggLTYuNzczOTgsNi43NzM5OGMtMy43NDA1OSwwIC02Ljc3Mjk3LC0zLjAzMzQgLTYuNzcyOTcsLTYuNzczOThjMCwtMy43NDA1OSAzLjAzMjQsLTYuNzcyOTcgNi43NzI5NywtNi43NzI5N2MzLjc0MDU5LDAgNi43NzM5OCwzLjAzMzQgNi43NzM5OCw2Ljc3Mjk3eiIgZmlsbD0iI2VjZmZhMyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjwvZz48L3N2Zz4=';
    		this.menuicon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMS44NDU0NiIgaGVpZ2h0PSIzNC4wNjM4MSIgdmlld0JveD0iMCwwLDMxLjg0NTQ2LDM0LjA2MzgxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI0LjA3NzI3LC0xNjIuMDEzNDUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGc+PHBhdGggZD0iTTIzMS42OTI4NSwxODQuNjA2ODFsMC4xMzA5MSwtMjAuNjg0MDdsMTcuMjgwMzYsNy41OTI4OWwtMC4xMzA5MSw5LjgxODM5IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjM4Ljc3MzI4LDE4OC43Mjg3MmMwLDQuMDU3ODYgLTMuMjkwNjksNy4zNDg1NCAtNy4zNDg1NCw3LjM0ODU0Yy00LjA1Nzg2LDAgLTcuMzQ3NDYsLTMuMjkwNjkgLTcuMzQ3NDYsLTcuMzQ4NTRjMCwtNC4wNTc4NiAzLjI4OTYsLTcuMzQ3NDYgNy4zNDc0NiwtNy4zNDc0NmM0LjA1Nzg2LDAgNy4zNDg1NCwzLjI5MDY5IDcuMzQ4NTQsNy4zNDc0NnoiIGZpbGw9IiNhNmQzODgiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNTUuOTIyNzMsMTg2LjExMDQ4YzAsNC4wNTc4NiAtMy4yOTA2OSw3LjM0ODU0IC03LjM0ODU0LDcuMzQ4NTRjLTQuMDU3ODYsMCAtNy4zNDc0NiwtMy4yOTA2OSAtNy4zNDc0NiwtNy4zNDg1NGMwLC00LjA1Nzg2IDMuMjg5NiwtNy4zNDc0NiA3LjM0NzQ2LC03LjM0NzQ2YzQuMDU3ODYsMCA3LjM0ODU0LDMuMjkwNjkgNy4zNDg1NCw3LjM0NzQ2eiIgZmlsbD0iI2VjZmZhMyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjwvZz48L2c+PC9zdmc+';
		this.runtime = runtime;
		this.end_hat = 0;
		this.audio_player = new Audio();
		this.set_volume = 1;
		this.version_number = '1.1';
    }

    getInfo () {
        return {
            "id": 'scratchify',
            "name": 'Scratchify',
			"blockIconURI": this.icon,
			"menuIconURI": this.menuicon,
            "blocks": [
				{
                	"opcode": 'playAudioFromURL',
                    "blockType": "command",
                    "text": 'play audio [URL]',
					"arguments": {
						"URL": {
							"type": "string",
							"defaultValue": 'https://dev.meower.org/bgm/2.mp3',
						},
					},
                },
				{
                	"opcode": 'stopAudio',
                    "blockType": "command",
                    "text": 'stop audio',
                },
				{
                	"opcode": 'pauseAudio',
                    "blockType": "command",
                    "text": 'pause',
                },
				{
                	"opcode": 'resumeAudio',
                    "blockType": "command",
                    "text": 'resume',
                },
				{
			"opcode": 'goToLocation',
                    "blockType": "command",
                    "text": 'go to location [LOCATION]',
					"arguments": {
						"LOCATION": {
							"type": "number",
							"defaultValue": '0',
						},
					},
                },
				{
			"opcode": 'setAudioVolume',
                    "blockType": "command",
                    "text": 'set volume [VOLUME]',
					"arguments": {
						"VOLUME": {
							"type": "number",
							"defaultValue": '100',
						},
					},
                },
				{
                	"opcode": 'enableLoop',
                    "blockType": "command",
                    "text": 'turn loop on',
                },
		    		{
                	"opcode": 'disableLoop',
                    "blockType": "command",
                    "text": 'turn loop off',
                },
		    		{
                	"opcode": 'audioLocation',
                    "blockType": "reporter",
                    "text": 'audio location',
                },
		    		{
                	"opcode": 'audioDuration',
                    "blockType": "reporter",
                    "text": 'audio duration',
                },
		    		{
                	"opcode": 'audioVolume',
                    "blockType": "reporter",
                    "text": 'audio volume',
                },
		    		{
                	"opcode": 'audioPaused',
                    "blockType": "Boolean",
                    "text": 'audio paused?',
                },
		    		{
                	"opcode": 'audioEnded',
                    "blockType": "Boolean",
                    "text": 'audio ended?',
                },
		    		{
                	"opcode": 'loopEnabled',
                    "blockType": "Boolean",
                    "text": 'loop enabled?',
                },
				{
                	"opcode": 'whenAudioEnds',
                    "blockType": "hat",
                    "text": 'when audio ends',
                },
				{
                	"opcode": 'versionNumber',
                    "blockType": "reporter",
                    "text": 'extension version',
                },
			]
        };
    };

	playAudioFromURL({URL}) {
		this.audio_player = new Audio(URL);
		this.audio_player.play();
		this.audio_player.volume = this.set_volume
		this.end_hat = 1;
	};

	stopAudio({}) {
		this.audio_player.pause();
		this.audio_player.currentTime = 0;
	};

	pauseAudio({}) {
		this.audio_player.pause();
	};

	resumeAudio({}) {
		this.audio_player.play();
	};

	goToLocation({LOCATION}) {
		this.audio_player.currentTime = LOCATION;
	};

	setAudioVolume({VOLUME}) {
		if (VOLUME > 0 && VOLUME < 100) {
 			this.audio_player.volume = VOLUME / 100;
			this.set_volume = VOLUME / 100;
		};
	};

	enableLoop({}) {
		this.audio_player.loop = true;
	};
	
	disableLoop({}) {
		this.audio_player.loop = false;
	};

	audioLocation({}) {
		return this.audio_player.currentTime;
	};

	audioDuration({}) {
		return this.audio_player.duration;
	};

	audioVolume({}) {
		return this.audio_player.volume * 100;
	};

	audioPaused({}) {
		return this.audio_player.paused;
	};

	audioEnded({}) {
		return this.audio_player.ended;
	};

	loopEnabled({}) {
		return this.audio_player.loop;
	};

	whenAudioEnds() {
		if (this.end_hat == 1 && this.audio_player.ended) {
			this.end_hat = 0;
			return true;
		} else {
			return false;
		};
	};

	versionNumber({}) {
		return this.version_number;
	};
};

(function() {
    var extensionClass = ScratchifyExtension;
    if (typeof window === "undefined" || !window.vm) {
        Scratch.extensions.register(new extensionClass());
		console.log("Sandboxed mode detected, performance will suffer because of the extension being sandboxed.");
    } else {
        var extensionInstance = new extensionClass(window.vm.extensionManager.runtime);
        var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance);
        window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName);
		console.log("Unsandboxed mode detected. Good.");
    };
})()
