<template>
  <div class="d-flex flex-xl-column surface">
    <v-responsive :aspect-ratio="16 / 9">
      <div id="youtube-player"></div>
    </v-responsive>
    <v-divider :vertical="$vuetify.breakpoint.lgAndDown"></v-divider>
    <video-playlist @select-video="updateVideoPlayer"></video-playlist>
  </div>
</template>
<script>
export default {
  data: () => ({
    videoPlayed: '',
  }),
  mounted() {
    if (window.YT) {
      this.youtube = window.YT
      this.createPlayer()
    } else {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/player_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

      window.onYouTubeIframeAPIReady = () => {
        this.youtube = window.YT
        this.createPlayer()
      }
    }
  },
  methods: {
    createPlayer() {
      this.player = new this.youtube.Player('youtube-player', {
        videoId: this.videoPlayed, // YouTube Video ID
        width: '100%', // Player width (in px)
        height: '100%', // Player height (in px)
        playerVars: {
          autoplay: 1, // Auto-play the video on load
          controls: 1, // Show pause/play buttons in player
          showinfo: 0, // Hide the video title
          modestbranding: 1, // Hide the Youtube Logo
          loop: 1, // Run the video in a loop
          fs: 0, // Hide the full screen button
          cc_load_policy: 0, // Hide closed captions
          iv_load_policy: 3, // Hide the Video Annotations
          autohide: 0, // Hide video controls when playing
        },
        events: {
          onReady: (e) => {
            this.player.mute()
          },
        },
      })
    },
    updateVideoPlayer(id) {
      if (this.player) {
        this.player.loadVideoById(id)
      }
      this.videoPlayed = id
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
