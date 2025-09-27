<script setup lang="ts">
import { dateZhCN, zhCN } from 'naive-ui'
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN">
    <NModalProvider>
      <NDialogProvider>
        <NMessageProvider>
          <NNotificationProvider>
            <slot />
          </NNotificationProvider>
        </NMessageProvider>
      </NDialogProvider>
    </NModalProvider>
  </NConfigProvider>
</template>

<style scoped></style>
