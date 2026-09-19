---
title: Syntax Test
pubDate: 2025-12-14
categories: ['Syntax']
description: ''
---
Test syntax
```cpp
// DiaHelper.cpp : Defines the functions for the static library.
//

#include "pch.h"
#include "DiaHelper.h"

HMODULE g_hDiaDll;

bool DiaSession::OpenImage(PCWSTR path) {
	return OpenCommon(path, true);
}

bool DiaSession::OpenPdb(PCWSTR path) {
	return OpenCommon(path, false);
}

void DiaSession::Close() {
	m_spSession.Release();
}

DiaSession::operator bool() const {
	return m_spSession != nullptr;
}

std::wstring DiaSession::LastError() const {
	CComBSTR text;
	return m_spSource && S_OK == m_spSource->get_lastError(&text) ? text.m_str : L"";
}

DiaSymbol DiaSession::GlobalScope() const {
	if (m_spSession == nullptr)
		return DiaSymbol(nullptr);

	CComPtr<IDiaSymbol> spSym;
	m_spSession->get_globalScope(&spSym);
	return DiaSymbol(spSym);
} 
