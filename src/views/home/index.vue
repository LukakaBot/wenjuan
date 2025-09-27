<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="p20">
    <h1 class="font-weight-100 text-center">问卷系统</h1>
    <div flex="~ gap2" class="mb-4">
      <n-button
        type="info"
        :render-icon="
          () =>
            renderIcon({
              icon: 'ep:plus',
            })
        "
        @click="() => router.push('/editor')"
        >创建问卷</n-button
      >
      <n-button
        type="success"
        :render-icon="
          () =>
            renderIcon({
              icon: 'ep:compass',
            })
        "
        @click="() => router.push('/materials')"
        >组件市场</n-button
      >
    </div>
    <n-data-table :data="tableData" :columns="columns" bordered />
  </div>
</template>

<script setup lang="ts">
import { renderIcon } from '@/utils/tools'
import type { DataTableBaseColumn } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()

const tableData = ref([])

const columns: DataTableBaseColumn[] = [
  {
    title: 'id',
    align: 'center',
    key: 'index',
    width: 60,
    fixed: 'left',
    render: (_, index) => `${index + 1}`,
  },
  {
    title: '创建日期',
    key: 'createDate',
    width: 120,
    align: 'center',
    ellipsis: { tooltip: true },
  },
  {
    title: '问卷标题',
    key: 'title',
    width: 120,
    align: 'center',
    ellipsis: { tooltip: true },
  },
  {
    title: '题目数',
    key: 'surveyCount',
    width: 120,
    align: 'center',
    ellipsis: { tooltip: true },
  },
  {
    title: '最近更新日期',
    key: 'updateDate',
    width: 120,
    align: 'center',
    ellipsis: { tooltip: true },
  },
  {
    title: '操作',
    key: 'action',
    width: 120,
    align: 'center',
    ellipsis: { tooltip: true },
    render: () => {},
  },
]
</script>

<style scoped></style>
