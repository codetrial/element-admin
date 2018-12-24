<template>
  <div class="standard-table">
    <!-- 查询表单 -->
    <el-card shadow="never" class="standard-table-filter">
      <el-form :inline="true" :model="filter" class="standard-table-filter__form">
        <el-form-item label="ID">
          <el-input v-model="filter.id" placeholder="精确匹配"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="filter.type" placeholder="请选择">
            <el-option label="全部" value></el-option>
            <el-option label="个人" value="1"></el-option>
            <el-option label="组织" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 翻页、工具栏 -->
    <el-card shadow="never" class="standard-table-toolbar">
      <div class="standard-table-toolbar__row">
        <div class="standard-table-toolbar__buttons">
          <el-button
            type="primary"
            @click="showMultipleModal = true"
            :disabled="!multipleSelection.length"
          >批量操作</el-button>
          <el-button icon="el-icon-plus" @click="$router.push('/example/new')">新增条目</el-button>
        </div>
        <el-pagination
          class="standard-table-toolbar__pagination"
          @size-change="size => updatePageAndSearch({ pageSize: size })"
          @current-change="current => updatePageAndSearch({ pageNo: current })"
          :page-sizes="[10, 20, 40, 80]"
          :current-page="exampleList.page.pageNo"
          :page-size="exampleList.page.pageSize"
          :total="exampleList.page.total"
          background
          layout="total, sizes, prev, pager, next, jumper"
        ></el-pagination>
      </div>
    </el-card>

    <!-- 表格 -->
    <el-card shadow="never" class="standard-table-list">
      <el-table
        stripe
        style="width: 100%;"
        ref="exampleTable"
        tooltip-effect="dark"
        v-loading="loading"
        :data="exampleList.list"
        :default-sort="{prop: exampleList.page.orderBy, order: exampleList.page.order}"
        @filter-change="updateFilterAndSearch"
        @sort-change="({ prop, order}) => updatePageAndSearch({ orderBy: prop, order})"
        @selection-change="rows => multipleSelection = rows"
      >
        <el-table-column type="selection" min-width="60"></el-table-column>
        <el-table-column prop="id" sortable="custom" label="ID (可排序)" min-width="120"></el-table-column>
        <el-table-column prop="name" label="名称" min-width="240">
          <template slot-scope="scope">
            <a target="_blank" :href="scope.row.url">{{ scope.row.name }}</a>
          </template>
        </el-table-column>
        <el-table-column prop="typeText" label="类型" min-width="80"></el-table-column>
        <el-table-column
          prop="statusText"
          label="状态 (可筛选)"
          min-width="120"
          columnKey="status"
          :filters="[{text: '在线', value: '1'}, {text: '离线', value: '0'}]"
        ></el-table-column>
        <el-table-column prop="updateUser" label="更新用户 ID" min-width="120"></el-table-column>
        <el-table-column prop="updateUserName" label="更新用户" min-width="120"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" min-width="200"></el-table-column>
        <el-table-column label="操作" min-width="80">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="showExample(scope.row)">查看</el-button>
          </template>
        </el-table-column>
        <el-table-column type="expand" label="更多">
          <template slot-scope="scope">
            <el-form label-position="left" inline class="standard-table-list__expand">
              <el-form-item label="名称">
                <span>{{ scope.row.name }}</span>
              </el-form-item>
              <el-form-item label="创建用户 ID">
                <span>{{ scope.row.createUser }}</span>
              </el-form-item>
              <el-form-item label="创建用户">
                <span>{{ scope.row.createUserName }}</span>
              </el-form-item>
              <el-form-item label="创建时间">
                <span>{{ scope.row.createTime }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
      </el-table>

      <!-- 单个操作对话框 -->
      <el-dialog title="查看详情" v-if="currentRow" :visible="!!currentRow">
        <el-form label-width="150px">
          <el-form-item label="ID">
            <span>{{ currentRow.id }}</span>
          </el-form-item>
          <el-form-item label="名称">
            <span>{{ currentRow.name }}</span>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="currentRow = null">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 批量操作对话框 -->
      <el-dialog title="批量操作" :visible.sync="showMultipleModal">
        <el-table max-height="300" :data="multipleSelection">
          <el-table-column property="id" label="ID" min-width="100"></el-table-column>
          <el-table-column property="name" label="名称" min-width="200"></el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="showMultipleModal = false">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'example-table',

  data() {
    return {
      filter: this.getInitialFilter(),

      page: {},

      currentRow: null,

      showMultipleModal: false,

      multipleSelection: []
    }
  },

  computed: {
    ...mapState('example', {
      loading: 'loading',
      exampleList: 'exampleList'
    })
  },

  created() {
    this.page = {
      ...this.exampleList.page
    }
    this.search()
  },

  methods: {
    ...mapActions('example', ['searchExampleList']),

    updatePageAndSearch(payload) {
      this.page = {
        ...this.page,
        ...payload
      }

      this.search(false)
    },

    updateFilterAndSearch(payload) {
      this.filter = {
        ...this.filter,
        ...payload
      }

      this.search()
    },

    getInitialFilter() {
      return {
        id: '',
        type: '',

        status: []
      }
    },

    reset() {
      this.filter = this.getInitialFilter()
      this.search()
    },

    search(resetPageNo = true) {
      const { page, filter } = this
      const param = {
        page: {
          ...page
        },
        filter: {
          ...filter
        }
      }

      if (resetPageNo) {
        param.page.pageNo = 1
      }

      this.searchExampleList(param)
    },

    showExample(row) {
      this.currentRow = row
    }
  }
}
</script>
