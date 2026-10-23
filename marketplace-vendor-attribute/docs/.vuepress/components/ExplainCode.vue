<template>
  <div class="wk-explain-code-block">
    <div class="wk-explain-code-bar">
      <button class="wk-explain-code-btn" @click="toggleExplanation">
        {{ isOpen ? 'Hide Code Explanation' : 'Explain Code' }}
      </button>
    </div>
    <div :class="['wk-explain-code-response', { 'display-none': !isOpen }]">
      <div class="response-data" ref="responseDataRef"></div>
    </div>
  </div>
</template>

<script>
import { ref, watch, nextTick } from 'vue'

export default {
  name: 'ExplainCode',
  props: {
    explanation: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const isOpen = ref(false)
    const responseDataRef = ref(null)
    let typingTimer = null

    const startTypingEffect = () => {
      if (typingTimer) clearTimeout(typingTimer)
      if (!responseDataRef.value) return

      responseDataRef.value.innerHTML = ''
      const words = props.explanation.split(' ')
      let currentWordIndex = 0

      const typeWord = () => {
        if (!isOpen.value || !responseDataRef.value) return

        let word = words[currentWordIndex]
        if (currentWordIndex > 0) {
          responseDataRef.value.innerHTML += ' '
        }
        
        // Match replacements like b or br tags if present
        if (word.includes('/b')) {
          word = word.replace('/b', '<b>')
        }
        if (word.includes('/n')) {
          word = word.replace('/n', '<br>')
        }
        
        responseDataRef.value.innerHTML += word
        currentWordIndex++
        
        if (currentWordIndex < words.length) {
          typingTimer = setTimeout(typeWord, 50)
        }
      }

      typeWord()
    }

    const toggleExplanation = () => {
      isOpen.value = !isOpen.value
      if (isOpen.value) {
        nextTick(() => {
          startTypingEffect()
        })
      } else {
        if (typingTimer) {
          clearTimeout(typingTimer)
          typingTimer = null
        }
        if (responseDataRef.value) {
          responseDataRef.value.innerHTML = ''
        }
      }
    }

    return {
      isOpen,
      responseDataRef,
      toggleExplanation
    }
  }
}
</script>

<style scoped>
.wk-explain-code-block {
  padding: 16px 24px;
  margin-top: -16px;
  margin-bottom: 24px;
  background-color: rgb(24, 29, 34);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid rgb(47, 55, 65);
  border-top: none;
}

.wk-explain-code-block .wk-explain-code-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wk-explain-code-block .wk-explain-code-bar .wk-explain-code-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  padding: 6px 12px;
  background-color: rgb(31, 41, 52);
  border-radius: 8px;
  border: 1px solid rgb(71, 85, 105);
  transition: 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;
}

.wk-explain-code-block .wk-explain-code-bar .wk-explain-code-btn::before {
  content: "";
  display: block;
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_514_5761)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.1487 9.31989L9.32031 12.1483L19.9269 22.7549L22.7553 19.9265L12.1487 9.31989ZM12.1487 10.7341L10.7345 12.1483L13.563 14.9767L14.9772 13.5625L12.1487 10.7341Z' fill='%23CBD5E1'/%3E%3Cpath d='M11.0882 3.30955L13.563 4.44754L16.0379 3.30955L14.8999 5.78442L16.0379 8.2593L13.563 7.1213L11.0882 8.2593L12.2261 5.78442L11.0882 3.30955Z' fill='%23CBD5E1'/%3E%3Cpath d='M2.39219 2.39224L5.78438 3.95203L9.17656 2.39224L7.61677 5.78442L9.17656 9.17661L5.78438 7.61682L2.39219 9.17661L3.95198 5.78442L2.39219 2.39224Z' fill='%23CBD5E1'/%3E%3Cpath d='M3.31081 11.0876L5.78568 12.2256L8.26056 11.0876L7.12257 13.5625L8.26056 16.0374L5.78568 14.8994L3.31081 16.0374L4.4488 13.5625L3.31081 11.0876Z' fill='%23CBD5E1'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_514_5761'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
}

.wk-explain-code-block .wk-explain-code-bar .wk-explain-code-btn:hover {
  background-color: rgb(6, 9, 13);
}


.wk-explain-code-block .wk-explain-code-response {
  color: rgb(203, 213, 225);
  margin-top: 16px;
  font-size: 15px;
  line-height: 1.6;
  word-break: break-word;
  overflow: hidden;
  transition: 0.3s ease-in;
}

.wk-explain-code-block .display-none {
  display: none;
}
</style>
