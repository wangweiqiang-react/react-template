/**
 * 路由组件出口文件
 */
import Home from '@/views/home/Index'
import BasicForm from '@/views/components/forms/BasicForm';
import BasicTable from '@/views/components/tables/BasicTable';
import Buttons from '@/views/components/ui/Buttons';
import BasicAnimations from '@/views/components/animation/BasicAnimations';

import MapUi from '@/views/components/ui/map';
import QueryParams from '@/views/components/extension/QueryParams';
import Visitor from '@/views/components/extension/Visitor';
import MultipleMenu from '@/views/components/extension/MultipleMenu';
import noMatch from '@/views/noMatch/Index.jsx'

export default {
    Home,
    BasicForm,
    BasicTable,
    Buttons,
    BasicAnimations,

    MapUi,
    QueryParams,
    Visitor,
    MultipleMenu,
    noMatch
}